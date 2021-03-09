import {
  faChevronCircleDown,
  faChevronCircleUp,
  faTimesCircle,
} from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo, useState } from 'react';
import { ArrayParam, useQueryParam } from 'use-query-params';

import { Navbar } from '../components';
import { GITHUB_PAGES_MAX_URL_LENGTH } from '../constants';

const containsMultiple = (str: string, searchChar: string): boolean => {
  if (searchChar.length !== 1) {
    throw new Error('Invalid search character for containsMultiple specified.');
  }

  let seen = false;
  for (const char of str) {
    if (char === searchChar) {
      if (seen) {
        return true;
      } else {
        seen = true;
      }
    }
  }
  return false;
};

type Item = {
  name: string;
  display: string;
  value: number;
};
type ParseResult = { success: boolean; result?: Item; error?: string };
const tryParseRawItem = (rawItem: string): ParseResult => {
  try {
    const decoded = decodeURIComponent(rawItem);
    const [name, display] = decoded.split(' - ');
    const value = display.replace(/[^0-9.]/g, '');
    if (!value || containsMultiple(value, '.')) {
      return { success: false, error: `${display} is not a valid number` };
    } else {
      return {
        success: true,
        result: {
          name,
          display,
          value: parseFloat(value),
        },
      };
    }
  } catch (err) {
    // console.error(`Error parsing '${rawItem}':`);
    // console.error(err);
    return { success: false, error: `Unknown error parsing ${rawItem}` };
  }
};

const findMatchingItem = (query: string, arr: Item[]): Item | undefined => {
  return arr.find((i) => i.name.toLowerCase().includes(query));
};

const byName = (a: Item, b: Item): number => {
  const aVal = a.name.toLocaleLowerCase();
  const bVal = b.name.toLocaleLowerCase();

  return aVal.localeCompare(bVal);
};

export default function Main() {
  const [rawItems, setRawItems] = useQueryParam('i', ArrayParam);

  const [show, setShow] = useState<boolean>(!rawItems?.length);
  // const [errors, setErrors] = useState<string[]>([]);
  const [globalError, setGlobalError] = useState<string>();
  const [currentOptions, setCurrentOptions] = useState<[Item?, Item?]>();
  const [formula, setFormula] = useState<string>('');
  const [source, setSource] = useState<string>();

  // const items: Item[] = [];
  const items = useMemo(() => {
    const results: Item[] = [];
    if (rawItems) {
      for (const rawItem of rawItems) {
        if (rawItem) {
          const { success, result, error } = tryParseRawItem(rawItem);
          if (success && result) {
            results.push(result);
          } else if (error) {
            // setErrors((prev) => [...prev, error]);
          }
        }
      }
    }

    if (source === undefined) {
      setSource(results.map((i) => `${i.name} - ${i.display}`).join('\n'));
    }

    return results;
  }, [rawItems, source]);

  const winner = useMemo(() => {
    const first = currentOptions?.[0];
    const second = currentOptions?.[1];
    if (!first || !second) {
      return undefined;
    } else if (first.value > second.value) {
      return first;
    } else {
      return second;
    }
  }, [currentOptions]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setGlobalError(undefined);
    setSource(value);
    const rows = value.split('\n').map((v) => encodeURIComponent(v.trim()));
    const totalLength = rows.reduce(
      (total, cur) => total + cur.length + 3,
      window.location.host.length,
    );
    if (totalLength > GITHUB_PAGES_MAX_URL_LENGTH) {
      setGlobalError(
        `URL length exceeds ${GITHUB_PAGES_MAX_URL_LENGTH} characters - users will have to copy & paste items manually.`,
      );
      setRawItems(undefined);
    } else {
      setRawItems(rows);
    }
  };

  const handleFormulaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    setFormula(value);
    const [before, after] = value.split('..');
    const beforeItem = before
      ? findMatchingItem(before.toLowerCase(), items)
      : undefined;
    const afterItem = after
      ? findMatchingItem(after.toLowerCase(), items)
      : undefined;

    setCurrentOptions([beforeItem, afterItem]);
  };

  const handleOptionClick = (item: Item) => {
    const [first, second] = currentOptions ?? [];

    if (first && second) {
      setCurrentOptions([item, undefined]);
      setFormula(`${item.name}..`);
    } else if (first === undefined) {
      setCurrentOptions((prev) => [item, prev?.[1]]);
      setFormula(`${item.name}..${second?.name ?? ''}`);
    } else if (second === undefined) {
      setFormula(`${first.name}..${item.name}`);
      setCurrentOptions((prev) => [prev?.[0], item]);
    }
  };

  const handleClear = () => {
    setSource('');
    setRawItems(undefined);
    setCurrentOptions(undefined);
    setFormula('');
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {globalError ? (
                <div className="text-white w-full mt-10 px-6 py-4 border-0 rounded relative bg-red-500">
                  <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                  </span>
                  <span className="inline-block align-middle mr-8">
                    {globalError}
                  </span>
                </div>
              ) : null}
              <div className="py-6 w-full px-4">
                {/* <h1 className="text-4xl font-bold mb-4">Howdy</h1> */}
                <button
                  type="button"
                  className="inline-flex flex items-center justify-center space-x-1 rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => setShow((prev) => !prev)}
                >
                  <span>{show ? 'Hide' : 'Show'} Raw List</span>
                  <FontAwesomeIcon
                    icon={show ? faChevronCircleUp : faChevronCircleDown}
                  />
                </button>
                <button
                  type="button"
                  className="ml-4 inline-flex flex items-center justify-center space-x-1 rounded-md border border-red-300 px-4 py-2 bg-white text-base leading-6 font-medium text-red-700 shadow-sm hover:text-red-500 focus:outline-none focus:border-red-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={handleClear}
                >
                  <span>Clear List</span>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
                {show && (
                  <div className="rounded mt-4">
                    <textarea
                      rows={8}
                      cols={80}
                      onChange={handleChange}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Name - Value"
                      value={source}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="w-full lg:w-1/4 pt-8 px-4">
                {items.sort(byName).map((i) => (
                  <button
                    key={i.name}
                    className="w-full align-start text-left inline-flex space-x-4 hover:underline"
                    onClick={() => handleOptionClick(i)}
                  >
                    <span style={{ flexGrow: 1 }}>{i.name}</span>

                    <span>{i.display}</span>
                  </button>
                ))}
              </div>
              <div
                className="w-full lg:w-3/4 pt-8 px-4 flex-grow"
                style={{ flexGrow: 1 }}
              >
                <p className="mb-4">
                  <strong>Formula help:</strong> Type enough characters for a
                  unique match for each item that is being compared, separated
                  by '..' For example, to compare "Apple" and "Orange" you could
                  type "app..ora"
                </p>
                <input
                  type="text"
                  className="w-full transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 px-4 block w-full appearance-none leading-normal ds-input"
                  placeholder="Enter formula"
                  value={formula}
                  onChange={handleFormulaChange}
                  onFocus={(e) => e.target.select()}
                />
                <div className="my-10 flex">
                  <span
                    className="flex align-center justify-center text-center"
                    style={{ flexGrow: 1 }}
                  >
                    {currentOptions?.[0]?.name}
                    <br />
                    {currentOptions?.[0]?.display}
                  </span>
                  <span
                    className="flex align-center justify-center text-center"
                    style={{ flexGrow: 1 }}
                  >
                    {currentOptions?.[1]?.name}
                    <br />
                    {currentOptions?.[1]?.display}
                  </span>
                </div>
                <div className="my-10 flex w-full">
                  <p className="text-center w-full text-4xl">
                    <strong>{winner?.name}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
