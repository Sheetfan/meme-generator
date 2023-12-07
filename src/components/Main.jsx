import placeholderImg from "../image/memeimg.png";
import "../scss/App.scss";
export default function Main(){
    return (
		<main>
			<form action="">
				<div>
					<label htmlFor="">Top text</label>
					<input type="text" name="" id="" placeholder="shut up" />
				</div>
				<div>
					<label htmlFor="">Bottom Text</label>
					<input type="text" placeholder="And take my money" />
				</div>

				<button>Get a new meme image</button>
			</form>
			<img src={placeholderImg} alt="" />
		</main>
	);
}