import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confetti from 'canvas-confetti';
import configData from './config'
import metaImage from './assets/meta.gif'


function App() {

	const {affLink, bannerPic, profileName, profilePic, sheetUrl} = configData;
	const [nama, setNama] = useState("")
	const [wa, setWA] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const handleChange = (e) => {
		if (e.target.name == "nama") {
			setNama(e.target.value)
		}
		if (e.target.name == "wa") {
			setWA(e.target.value)
		}
	}

	const handleClick = async () => {
		const btn = document.getElementById("btn")

		// console.log(nama,wa)
		if (nama.length < 2) {
			toast.error("Mohon isi nama dengan benar!")
			return;
		}

		if (wa.length < 10) {
			toast.error("Mohon isi nomor WA dengan benar!")
			return;
		}

		let forms = new FormData()
		forms.append("Nama", nama)
		forms.append("Wa", wa)

		btn.setAttribute("disabled", true)
		setIsLoading(prev => !prev)

		// console.log(forms)
		const res = await sendData(forms)
		console.log(res)

		window.location.replace(affLink)

	}

	const sendData = async (data) => {
		const result = await fetch(sheetUrl, {
			method: "POST",
			body: data
		})
		const jsonResponse = await result.json()
		return jsonResponse
	}

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
					<h3 className='text-base font-medium italic'>Silahkan isi data diri anda :</h3>
					<div className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-[70%] p-[1px] rounded-md'>
						<input type='text' name='nama' className='rounded-md p-1 w-full focus:outline-none' placeholder='Nama Lengkap' onChange={(e) => handleChange(e)} required/>
					</div>
					<div className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-[70%] p-[1px] rounded-md'>
						<input type='text' name='wa' className='rounded-md p-1 w-full focus:outline-none' placeholder='No. Whatsapp' onChange={(e) => handleChange(e)} required/>
					</div>
					<button className='border p-3 rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-slate-50 font-bold w-[70%] shadow-md text-center cursor-pointer hover:bg-gradient-to-tr hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500' id='btn' onClick={() => handleClick()}>
						{isLoading && <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
							<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
						</svg>}
						{isLoading ? "Loading": "Lanjutkan"}
					</button>
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
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					/>
					{/* Same as */}
				<ToastContainer />
			</div>
		</>
      
  )
}

export default App
