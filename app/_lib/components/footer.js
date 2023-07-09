export default function Footer () {
	return (
		<div className="h-fit w-full px-10 flex items-center justify-center">
            <div className='w-full h-fit border-t-[1px] border-black/60 py-4'>
              <p className='text-black/80 text-base md:text-2xl font-second font-bold tracking-wide text-center'>© {new Date().getFullYear()} {big_title}</p>
            </div>
        </div>
	);
}