import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function SkeletonLoader() {
    return (
        <section className='grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3'>
            <Box sx={{ width: 360, marginRight: 0.5, my: 5 }}>

                <Skeleton variant="rectangular" width={350} height={198} />

                <Box sx={{ py: 1 }}>
                    <Skeleton width="60%" />
                    <Skeleton width="60%" />
                    <Box sx={{py: 1}}>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                    <Skeleton width="60%" />
                </Box>
                <div className='pt-2 flex items-center'>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Box sx={{ pt: 0.5, pl: 2, width: '100%' }}>
                        <Skeleton width="50%" />
                        <Skeleton width="50%" />
                    </Box>
                </div>
            </Box>

            <Box sx={{ width: 360, marginRight: 0.5, my: 5 }}>

                <Skeleton variant="rectangular" width={350} height={198} />

                <Box sx={{ py: 1 }}>
                    <Skeleton width="60%" />
                    <Skeleton width="60%" />
                    <Box sx={{py: 1}}>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                    <Skeleton width="60%" />
                </Box>
                <div className='pt-2 flex items-center'>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Box sx={{ pt: 0.5, pl: 2, width: '100%' }}>
                        <Skeleton width="50%" />
                        <Skeleton width="50%" />
                    </Box>
                </div>
            </Box>

            <Box sx={{ width: 360, marginRight: 0.5, my: 5 }}>

                <Skeleton variant="rectangular" width={350} height={198} />

                <Box sx={{ py: 1 }}>
                    <Skeleton width="60%" />
                    <Skeleton width="60%" />
                    <Box sx={{py: 1}}>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                    <Skeleton width="60%" />
                </Box>
                <div className='pt-2 flex items-center'>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Box sx={{ pt: 0.5, pl: 2, width: '100%' }}>
                        <Skeleton width="50%" />
                        <Skeleton width="50%" />
                    </Box>
                </div>
            </Box>
        </section>
    );
}

export default SkeletonLoader