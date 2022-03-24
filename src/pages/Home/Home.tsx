import React from 'react';

export const Home = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        transform: 'unset',
        background:
          'radial-gradient(153.32% 100% at 47.26% 0%, rgba(130, 71, 229, 0.086) 0%, rgba(0, 41, 255, 0.06) 48.19%, rgba(0, 41, 255, 0.01) 100%), rgb(255, 255, 255)',
        backgroundBlendMode: 'multiply, normal'
      }}>
      <div className="mx-auto px-4 sm:px-6 pt-6 grid grid-cols-5 grid-rows-3 gap-4 max-w-7xl justify-center">
        <div className="col-start-1 col-end-3 row-start-1 row-end-3">
          <div className="shadow rounded-lg py-3 px-5 bg-white bg-opacity-80">
            <h3 className="text-base text-slate-400 mb-4">Welcome to Confistar CFX PoS Pool!</h3>

            <div className="flex flex-col	w-full mt-4">
              <h2 className="font-bold text-lg">93000</h2>
              <label htmlFor="">My Staked (CFX)</label>
              <div className="flex justify-between">
                <input className="w-full p-2 border-solid	border-2 border-slate-100" type="number" />
                <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Stake
                </button>
              </div>
              <span className="text-sm text-slate-400">Balance: 355.9257 CFX</span>
            </div>

            <hr className="mt-2" />

            <div className="flex flex-col	w-full mt-4">
              <h2 className="font-bold text-lg">0</h2>
              <label htmlFor="">My Rewards (CFX)</label>
              <div className="flex w-full">
                <button className="w-full whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Claim
                </button>
              </div>
              <span className="text-sm text-slate-400">Last Update 2022-03-21 16:55:03</span>
            </div>

            <hr className="mt-2" />

            <div className="flex flex-col	w-full mt-4">
              <h2 className="font-bold text-lg">0</h2>
              <label htmlFor="">Unstakeable CFX</label>
              <div className="flex justify-between">
                <input className="w-full p-2 border-solid	border-2 border-slate-100" type="number" />
                <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Unstake
                </button>
              </div>
            </div>

            <hr className="mt-2" />

            <div className="flex flex-col	w-full mt-4">
              <h2 className="font-bold text-lg">0</h2>
              <label htmlFor="">Withdrawable CFX</label>
              <div className="flex w-full">
                <button className="w-full whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Withdraw
                </button>
              </div>
            </div>

            <hr className="mt-2" />
          </div>
        </div>

        <div className="col-start-3 col-end-6 row-start-1 row-end-2">
          <div className="shadow rounded-lg py-3 px-5 bg-white">
            <h3 className="text-base text-slate-400 mb-4">Information</h3>

            <div className="w-full grid grid-cols-2">
              <div>
                <div>
                  <img src="" alt="" />
                  <h3 className="font-bold text-lg">5.5460 M</h3>
                  <span className="text-base text-slate-400">Staking Vault</span>
                </div>

                <div>
                  <img src="" alt="" />
                  <h3 className="font-bold text-lg">171</h3>
                  <span className="text-base text-slate-400">Staker Number</span>
                </div>

                <div>
                  <img src="" alt="" />
                  <h3 className="font-bold text-lg">0x8994</h3>
                  <span className="text-base text-slate-400">PoS Address</span>
                </div>
              </div>
              <div>
                <div>
                  <img src="" alt="" />
                  <h3 className="font-bold text-lg">44.7436 K</h3>
                  <span className="text-base text-slate-400">Total Earned</span>
                </div>

                <div>
                  <img src="" alt="" />
                  <h3 className="font-bold text-lg">Good</h3>
                  <span className="text-base text-slate-400">Pool Status</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-3 col-end-6 row-start-2 row-end-3">
          <div className="shadow rounded-lg py-7 px-10 bg-white">
            <h3 className="font-bold text-lg">Stake Rules</h3>
            <ol>
              <li className="list-disc">The Stake/Unstake CFX amount must be multiple of 1000</li>
              <li className="list-disc">The lock period of Stake/Unstake is 7 day</li>
              <li className="list-disc">The reward will updated every hour</li>
              <li className="list-disc">The reward can be claimed any time</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
