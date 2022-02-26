import React, { useContext } from "react";

import { FaConnectdevelop } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaEthereum } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { SiHiveBlockchain } from "react-icons/si";
import { MdMoneyOff } from "react-icons/md";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
    
  
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white  py-1">
          <FaConnectdevelop className="headIcon" />
            Discover the world <br /> of Cryptocurrencies
          </h1>
          <p className="text-left mt-5 text-white font-bold pb-10 md:w-9/12 w-11/12 text-base">
            Enjoy our fast and easy platform of sending crypto, 
            Keep your eyes on the latest news and get the current exchange prices 
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center bg-[#430051] items-center my-2  p-6 rounded-full cursor-pointer hover:bg-[#2f0039]"
            >
              <FaConnectdevelop className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={'text-white font-bold flex flex-row text-2xl'}>
                <VscWorkspaceTrusted className={'pr-3 pb-2 text-4xl'}/>
              Reliability
            </div>
            <div className={'text-white font-bold flex flex-row text-2xl'}>
                <MdOutlineSecurity className={'pr-3 pb-2 text-4xl'} />
                 Security
                </div>
            <div className={'text-white font-bold flex flex-row text-2xl'}>
                <FaEthereum className={'pr-3 pb-2 text-4xl'} />
              Ethereum
            </div>
            <div className={'text-white font-bold flex flex-row text-2xl'}>
                <IoLogoWebComponent className={'pr-3 pb-2 text-4xl'} />
              Web 3.0
            </div>
            <div className={'text-white font-bold flex flex-row text-2xl'}>
                <MdMoneyOff className={'pr-3 pb-2 text-4xl'} />
                Low Fees
                </div>
            <div className={'text-white font-bold flex flex-row text-2xl'}>
                <SiHiveBlockchain className={'pr-3 pb-2 text-4xl'}/>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome