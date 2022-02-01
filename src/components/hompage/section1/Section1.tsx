import React, { useContext, useEffect, useState } from 'react';
import { contentClass } from '../../../styles/contentClass';
import logo from '../../../../public/logotransparent.png';
import Image from 'next/image';
import Button from '../../buttons/Button';
import SlideDown from '../../animated/SlideDown';
import IsLoaderContext from '../../../context/isLoaderContext';
import SlideUp from '../../animated/SlideUp';
import { useInView } from 'react-intersection-observer';
import { AppContext } from '../../../context/AppContext';
import { ActionType } from '../../../context/Actions';

function Section1() {
  const { isLoader } = useContext(IsLoaderContext);
  const { ref, inView } = useInView({ threshold: 0.8 });
  const [isAnim, setIsAnim] = useState(true);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (inView === false && window.innerWidth < 1200) {
      setIsAnim(true);
    } else {
      setIsAnim(inView);
    }
  });

  useEffect(() => {
    if (isAnim) {
      dispatch({
        type: ActionType.SetIndex,
        payload: 1,
      });
    }
  }, [isAnim]);

  return (
    <div ref={ref} className={`${contentClass} font-poppins`}>
      {!isLoader && isAnim && (
        <div>
          <SlideDown duration={1.5} className="font-syncopate font-bold text-7xl text-center">
            SPEND COIN
          </SlideDown>
          <SlideDown duration={2} className="text-2xl mt-2 text-center">
            BUY EVERYTHING WITH CRYPTO
          </SlideDown>
          <SlideUp duration={2} className="text-center mt-5 font-poppins lg:mx-10  lg:text-lg">
            We aim to allow anyone to purchase goods in a decentralized way with a non custodial wallet. Spend coin team build customised e-shops
            called meta-shops. As a seller, you’ll be able to offer decentralized crypto-paiement to your customers and receive euros or
            crypto-currencies.{' '}
          </SlideUp>
          <SlideUp duration={1.5} className="mt-10 flex w-full justify-center">
            <a
              href="https://spend-coin-goodies.vercel.app/"
              className="bg-transparent z-40 transform   duration-500 hover:border-blue hover:text-blue lg:mx-4 mx-2  text-xs lg:text-base rounded-md border px-10 py-2"
              target={'_blank'}>
              Meta shop
            </a>
            <a
              href="https://spend-coin-goodies.vercel.app/"
              className="bg-transparent z-40 transform   duration-500 hover:border-blue hover:text-blue lg:mx-4 mx-2  text-xs lg:text-base rounded-md border px-10 py-2"
              target={'_blank'}>
              White paper
            </a>
          </SlideUp>
        </div>
      )}
      {!isLoader && isAnim && (
        <div className="absolute mr-20">
          <Image className="animate-fadeIn" src={logo} alt="Picture of the author" width={250} height={700} />
        </div>
      )}
    </div>
  );
}

export default Section1;
