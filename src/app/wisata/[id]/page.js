import React from "react";

export default function page() {
  return (
    <div className="mx-10">
      <h1 className="capitalize font-extrabold sm:text-lg md:text-3xl pt-5 mb-10 sm:ml-5 md:ml-20  ">
        kebun teh tambi
      </h1>
      <a className="pb-10 ml-20 capitalize text-blue-500 font-bold" href="#">
        menuju ke gmaps
      </a>
      <div className="md:flex pt-10 justify-between">
        <div className="sm:w-full md:w-1/2 ">
          <div className="carousel">
            <div id="item1" className="carousel-item w-full">
              <img src="/bg.svg" className="w-full" loading="lazy" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-center py-2 gap-2">
            <a href="#item1" className=" w-20 ">
              <img src="/bg.svg" alt="" loading="lazy" />
            </a>
            <a href="#item2" className="w-20 ">
              <img src="/bg.svg" alt="" loading="lazy" />
            </a>
            <a href="#item3" className="w-20 ">
              <img src="/bg.svg" alt="" loading="lazy" />
            </a>
            <a href="#item4" className="w-20 ">
              <img src="/bg.svg" alt="" loading="lazy" />
            </a>
          </div>
        </div>
        <div className="sm:w-full  mt-10 md:mt-1 md:w-2/5 shadow-lg shadow-grey-100/50 rounded-lg">
          <h1 className="  mb-10 flex justify-center font-extrabold text-lg md:text-xl capitalize">
            tentang
          </h1>
          <p className="text-justify mx-4 ">
            Kebun Teh Tambi terletak di Desa Tambi, kecamatan Kejajar, Kabupaten
            Wonosobo. Jarak dari pusat kota Wonosobo ke lokasi Kebun Teh Tambi
            kurang lebih 18km, sedangkan jarak dari Dieng ke lokasi Kebun Teh
            Tambi yakni kurang lebih sekitar 16km. Kebun Teh Tambi memiliki luas
            830 Ha, dengan pemandangan pegunungan disekelilingnya menjadi daya
            tarik tersendiri dari tempat wisata ini. Perkebunan kebun teh tambi
            ini terletak di ketinggian antara 800 – 2000 meter di atas permukaan
            laut.
          </p>
          <div className="overflow-x-auto mt-10 font-bold">
            <table className="table">
              {/* head */}

              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Alamat</td>
                  <td>Desa tambi, Kejajar, Wonosobo</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Harga Tiket</td>
                  <td>Rp 5000 rupiah</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
