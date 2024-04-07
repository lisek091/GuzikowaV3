import Nav from "@/components/noweWersje/nav/Nav";
import React from 'react'
import ImageGallery from "react-image-gallery";

const images = [
    {
      original: "https://www.dropbox.com/scl/fi/vive1cgz39l9z15qqlsxy/1.jpg?rlkey=iymavkjbbrmghp0f20qu4l5wy&raw=1",
      thumbnail: "https://www.dropbox.com/scl/fi/nh58zl9f4jwrowm7090uy/1thumb.jpg?rlkey=vyxrg4ld1ncdrp1iwyj8j8sui&raw=1",
    },
    {
      original: "https://www.dropbox.com/scl/fi/kregcg1b0nsdacyx4nrj0/5.jpg?rlkey=d3iihorjdej4tztz5zbxkotsj&raw=1",
      thumbnail: "https://www.dropbox.com/scl/fi/ycuet7ztvrw8c1jhx3ffd/5thumb.jpg?rlkey=wajqtvnm2i9cmqqg6h294hoyz&raw=1",
    },
    {
      original: "https://www.dropbox.com/scl/fi/hdje1er18qz7nf8cym38t/10.jpg?rlkey=0xgpxrj9vrl5o7q2pag7q68t2&raw=1",
      thumbnail: "https://www.dropbox.com/scl/fi/1eotto8xyz9mqqqxs1qpq/10thumb.jpg?rlkey=5jjwed1j2vqgl4t2hd5ai2wrv&raw=1",
    },
  ];

const Realizacje = () => {
  return (
    <>
        <Nav/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="text-2xl text-center ">Zapraszamy do kontaktu w razie pytań!</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ImageGallery items={images} />;
    </>
  )
}

export default Realizacje