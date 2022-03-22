export const isTestNetEnv = () => {
  if (typeof window !== `undefined`) {
    return process.env.REACT_APP_TestNet === 'true' || window.location.hostname.includes('test');
  }
  return false;
};

export const formatAddress = (addr: string, chainId: string | undefined) => {
  if (chainId === '1029') return addr.slice(0, 7) + "..." + addr.slice(addr.length - 8);
  if (chainId === '1') return addr.slice(0, 11) + "..." + addr.slice(addr.length - 8);
}