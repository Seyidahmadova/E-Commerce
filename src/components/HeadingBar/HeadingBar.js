import React from 'react';
import {HiChevronDown} from "react-icons/hi"
import {RxPerson, RxEnvelopeClosed} from 'react-icons/rx'
import {BsHeart, BsCart2} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'
import "./HeadingBar.css"

export default function HeadingBar() {
  return (
    <div className='HeadingBar'>
      <div className='phoneandmail'>
        <div className='mail'>
            <RxEnvelopeClosed className='header-icon' />
            <a href='ayselturkana@gmail.com'>ayselturkana@gmail.com</a>
        </div>
        <div className='phone'>
            <BiPhoneCall className='header-icon'/>
            <a href='tel:+994-051-505-00-00'>(994) 051 505 00 00</a>
        </div>
      </div>

      <div className='headerdroplist'>
        <div>
            English
            <HiChevronDown className='header-icon' />
        </div>
        <div>
            USD
            <HiChevronDown className='header-icon' />
        </div>
        <div>
            Login
            <RxPerson className='header-icon'/>
        </div>
        <div>
            Wishlist
            <BsHeart className='header-icon'/>
        </div>
        <div>
            <BsCart2 className='header-icon'/>
        </div>
      </div>
    </div>
  )
}
