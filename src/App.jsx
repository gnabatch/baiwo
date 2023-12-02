import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import configData from './config'
import metaImage from './assets/meta.gif'


function App() {

	const {affLink, bannerPic, profileName, profilePic} = configData;

	useEffect(() => {
		setTimeout(() => {
			confetti()
		}, 100);
	}, [])

  return (
		<>
			<div className='flex justify-center items-center flex-col gap-3 max-w-md h-full bg-slate-100 mx-auto p-2'>
				<div className="flex flex-col items-center mt-5">
					<img src={profilePic} className='w-[80px] h-[80px] bg-slate-600 border rounded-full shadow-md object-cover'/>
					<div className='flex items-center'>
							<p className='text-lg font-semibold mr-1 ml-3 mt-1'>{profileName}</p>
							<svg fill='none' height='16' viewBox='0 0 16 16' width='16' >
								<path d='M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z' fill='#0095F6'>
								</path>
								<path d='M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z' fill='white'>
								</path>
							</svg>
					</div>
				</div>
				<div className='mt-5'>
					<h1 className='text-2xl font-extrabold text-center'>
						Selamat! Anda berhak mendapatkan hadiah uang tunai dari saya.
					</h1>
				</div>
				<div className='flex flex-col items-center gap-2 w-[90%] mt-7'>
					<div className='flex flex-col gap-3 items-center p-3 rounded-md w-full bg-white'>
					<h3 className='text-base font-medium italic'>Silahkan isi nama lengkap anda :</h3>
					<div className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-[70%] p-[1px] rounded-md'>
						<input className='rounded-md p-1 w-full focus:outline-none' placeholder='Nama Lengkap'/>
					</div>
					<a className='border p-3 rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-slate-50 font-bold w-[70%] shadow-md text-center cursor-pointer hover:bg-gradient-to-tr hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500' href={affLink}>Lanjutkan</a>
					<img src={metaImage} className='mt-5'/>
					</div>
					<img src={bannerPic} alt='' className='w-full rounded-md bg-slate-900 mt-10'/>
				</div>
				<div className='mx-3 p-2 bg-white rounded-md'>
					<h3 className='font-bold mb-3'>Syarat-syarat untuk mendapatkan hadiah:</h3>
					<ul className='flex flex-col gap-2'>
						<li>1. Untuk berpartisipasi, silakan mendaftar dan selesaikan langkah-langkahnya sampai akhir.</li>
						<li>2. Setiap harinya akan dipilih 100 orang dan akan mendapatkan hadiah senilai 3 juta rupiah.</li>
						<li>3. Hadiah hanya akan dikirim kepada penerima yang telah menyelesaikan langkah-langkah yang telah ditentukan.</li>
						<li>4. Hadiah tidak berlaku jika penerima tidak menyelesaikan langkah-langkah tersebut.</li>
					</ul>
				</div>
				<div className=''>
					<p className='text-center text-sm font-thin'>Official {profileName} @2023</p>
				</div>
			</div>
		</>
      
  )
}

export default App
