export const formatAddress = (addr, chainId) => {
    if (chainId === '1029')
        return `${addr.slice(0, 8)}...${addr.slice(addr.length - 12)}`;
    else if (chainId === '1')
     return `${addr.slice(0, 12)}...${addr.slice(addr.length - 12)}`;
} 