const Banner = () => {
    return (
        <div className="w-full rounded-2xl !h-[191px] !my-6 !bg-[#702DFF] !py-[24px] !px-[20px] relative">
            <span className="uppercase !text-[14px] text-white">
                Online Course
            </span>
            <p className="!text-[24px] leading-[26px] !font-semibold !mt-[16px] !w-[328px] text-white">
                Sharpen Your Skills With Professional Online Courses
            </p>
            <button className='bg-[#202020] !w-[100px] !mt-[15px] !h-[35px] rounded-2xl text-white text-[14px] font-semibold'>
                Join Now
            </button>

            {/* Loop to render stars with random positions */}
            <div
                style={{
                    width: `30px`,
                    height: `30px`,
                    top: `44px`,
                    right: `22px`,
                    backgroundImage: "url(/assets/images/star1.png)",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                }}
                className="bg-cover"
            />
            <div
                style={{
                    width: `130px`,
                    height: `130px`,
                    top: `14px`,
                    right: `122px`,
                    backgroundImage: "url(/assets/images/star1.png)",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                }}
                className="bg-cover"
            />
            <div
                style={{
                    width: `70px`,
                    height: `70px`,
                    top: `14px`,
                    right: `40px`,
                    backgroundImage: "url(/assets/images/star1.png)",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                }}
                className="bg-cover"
            />
            <div
                style={{
                    width: `50px`,
                    height: `50px`,
                    top: `70px`,
                    right: `40px`,
                    backgroundImage: "url(/assets/images/star1.png)",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                }}
                className="bg-cover"
            />
            <div
                style={{
                    width: `80px`,
                    height: `80px`,
                    top: `100px`,
                    right: `40px`,
                    backgroundImage: "url(/assets/images/star1.png)",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                }}
                className="bg-cover"
            />
        </div>
    );
};

export default Banner;
