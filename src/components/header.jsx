import troll from "../image/Troll Face.svg";
export default function Header(){
    return (
		<header>
			<div>
				<img src={troll} alt="" />
				<h2>Meme Generator</h2>
			</div>
			<h4>React Course - Project 3</h4>
		</header>
	);
}