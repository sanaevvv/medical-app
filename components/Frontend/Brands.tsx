export type Props = {
  href: string;
  imgSrc: string;
  Alt: string;
};
const Brands = () => {
  return (
    <>
      <h2 className="text-center pb-7 text-gray-500 scroll-m-20 text-2xl font-semibold tracking-tight">
        Trusted By{' '}
      </h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;

const SingleImage = ({ href, imgSrc, Alt }: Props) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="w-full h-10" />
      </a>
    </>
  );
};
