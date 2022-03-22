import React from 'react';
import { createPortal } from 'react-dom';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { GlobeIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import { connect as tryActivate, useAccount, useChainId } from '@cfxjs/use-wallet';

import i18n from '../../locales';
import { formatAddress, isTestNetEnv } from '../../utils';
import { resources, recentPosts } from './data';

import NotAllow from '../../images/not-allow.png';
import confistartIcon from '../../confistar-icon.svg';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const isTest = isTestNetEnv();

export default function Header() {
  const { t } = useTranslation();
  const address = useAccount();
  const chainId = useChainId();
  const networkError = (isTest && chainId === '1029') || (!isTest && chainId === '1');

  return (
    <Popover className="relative bg-white">
      {isTest && (
        <div className="w-full h-[64px] leading-[64px] text-[#f3504f] bg-[#f3504f] bg-opacity-20 z-[49] text-[16px] text-center border-b border-[#f3504f]">
          {t('Header.test_note')}
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img className="h-8 w-auto sm:h-12" src={confistartIcon} alt="confistar-icon" />
            </a>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              {t('Header.home')}
            </a>
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              {t('Header.stats')}
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}>
                    <span>{t('Header.more')}</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                              Support
                            </h3>
                            <ul className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
              <GlobeIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
              <div className="flex items-center ml-4">
                <select
                  defaultValue={i18n.language}
                  onChange={(lng) => {
                    lng.preventDefault();
                    i18n.changeLanguage(lng.target.value);
                  }}
                  className="text-base font-medium text-gray-900">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>
            </div>
            <button
              onClick={tryActivate}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              {address && formatAddress(address, chainId)}
              {!address && t('Header.connect_fluent')}
            </button>
          </div>
        </div>
      </div>
      {networkError &&
        createPortal(
          <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-25 z-50">
            <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center w-[480px] h-[390px] px-[28px] py-[12px] bg-white shadow rounded-md">
              <img className="w-[340px] h-[240px]" src={NotAllow} alt="not allow imgs" />
              <p className="text-[32px] leading-[32px] text-[#333] my-[16px] font-bold">
                {t('Header.error')}
              </p>
              <p className="text-[16px] leading-[24px] text-[#999] my-0 font-medium">
                {isTest && chainId === '1029'
                  ? t('Header.unspport_network_switch_testnet')
                  : t('Header.unspport_network_switch_hydra')}
              </p>
            </div>
          </div>,
          document.body
        )}
    </Popover>
  );
}
