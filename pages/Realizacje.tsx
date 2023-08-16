import Nav from '@/components/noweWersje/nav/Nav'
import React from 'react'
import ImageGallery from "react-image-gallery";

const images = [
    {
      original: "https://lh3.googleusercontent.com/drive-viewer/AITFw-wguFECgNRVhX7LEAX_ZErJkzG5kXNg6lpUxBCK4IxRlo4rbqmKs-c4hXglu3QjEKIfP03GodOQdIiK9S9DJQSF0Dx4DA=s1600",
      thumbnail: "https://lh3.googleusercontent.com/drive-viewer/AITFw-zy9xaEVIJrxYgTEYr2o-ppf5feULporukmOHzv43ZY0pxRpvSCzBX42MuAzcxrKKNFQYwqbYfJAUOWfridBbQGhTt4Mw=s2560",
    },
    {
      original: "https://lh3.googleusercontent.com/drive-viewer/AITFw-xsQxYvqSqmJa4WeV0nfgZKo9b3EB-B2uoNt_2wPwVp5YOZPBMirbkXzkQdqxA7s5H16xyHhwpZ2XiM5HUD-8UwgCRJwg=s1600",
      thumbnail: "https://lh3.googleusercontent.com/drive-viewer/AITFw-wDNoi534Reyi1xaEHA0JV5WgxKAlqW_Ijnjo0DmqUdHdn7agTn44ZpWMLTcNSTqPLg6YVvNKgk4PyBasPduNahTcT4lA=s2560",
    },
    {
      original: "https://lh3.googleusercontent.com/drive-viewer/AITFw-zYb9-c8L1EPRgtF5ePiwHbA_dt58c5JcMbixst8Lj2DWjBSg5QyDtzGsxXE77I5B9cHLtpDHjTgI_8lQjFCk61LhCiew=s1600",
      thumbnail: "https://lh3.googleusercontent.com/drive-viewer/AITFw-zUPSm3zODthHSFE6QvdqPS6HZP2K5uCtx9wxROfofx3JVtyDpKr4p7Nw1gJqAmjRUhgBdtzmABKZqWvyWnA9i0DMDVaw=s2560",
    },
    {
        original: "https://lh3.googleusercontent.com/drive-viewer/AITFw-ytoLUelejx7hxi-tjbpBTOAZNvBBdYTzLe_N0dNrks35sdeKamt87aVSs_stFSKSA-PwNFWkF3S0A9_TBQKSGLj_mzJQ=s1600",
        thumbnail: "https://lh3.googleusercontent.com/drive-viewer/AITFw-yGVORzjYd1gCdiznYaoR1r--8QJLUTIWZy-i49IjsxOPm1YIjj_13WoIppllvOJHn79ZRTqREJM-HCMFZTXiJlrEhV=s2560",
      },
      {
        original: "https://lh3.googleusercontent.com/drive-viewer/AITFw-w4AelqnTpkzNAM3XCIOk_uBJX9gXcHi6zKFcZatGCD3Fk4UKTiQu--LhpEId7kmUR27gK3K2ubLroacWMwPtd7ms_hWQ=s1600",
        thumbnail: "https://lh3.googleusercontent.com/drive-viewer/AITFw-wcbdWz5edpP-0e5wXJQAQr8vQLaCYz3S7ra1rgDwCXVa_YVPL5rsral5brmEXst_7gn7mKReyfPvFbFdeunUmLPLsCig=s2560",
      },
      {
        original: "https://lh3.googleusercontent.com/drive-viewer/AITFw-xUOXmLa05HknqpoDtAhEmLZa2-LaIdj1Sb3mXzR-SmCKZjTeP6BB3sNqb7nFftk7l_PS7LOshtrUPUB1Z_m0qDhQQlkQ=s1600",
        thumbnail: "https://lh3.googleusercontent.com/drive-viewer/AITFw-wBvr_yedShn1HCsw-mYJpMEAAk86wMgC23Bun_mS60YDk6RTK2Bc2YTMCE6qFi5Ubgb5xq-yYC38LP1WqbeMv4WVRWAw=s2560",
      },
  ];

const Realizacje = () => {
  return (
    <div>
        <Nav/>
        <br></br><br></br><br></br><br></br>
        <ImageGallery items={images} />;
    </div>
  )
}

export default Realizacje