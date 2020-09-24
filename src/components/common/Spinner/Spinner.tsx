import React from 'react';
import Loader from 'react-loader-spinner';
import { Colors } from '../../../assets/const';

const Spinner = () => <Loader type="TailSpin" color={Colors.SECONDARY} height={50} width={50} />;

export default Spinner;
