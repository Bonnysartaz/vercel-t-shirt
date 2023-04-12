import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#000000',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './MSE.png',
  fullDecal: './MSE.png',
});

export default state;