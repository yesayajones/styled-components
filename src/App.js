import Header from './components/Header';
//We use curry braces for exports that are not default
import { Container } from './components/styles/Container.styled';

function App() {
	return (
		<>
			<Header />
			<Container>
				<h1>Hello World</h1>
			</Container>
		</>
	);
}

export default App;
