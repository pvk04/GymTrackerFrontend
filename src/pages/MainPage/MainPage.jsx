import Container from "../../components/Container/Container";
import AsideBar from "../../components/AsideBar/AsideBar";
import FunctionalPanel from "../../components/FunctionalPanel/FunctionalPanel";

import styles from "./MainPage.module.scss";

function MainPage() {
	return (
		<main>
			<Container>
				<AsideBar />
				<FunctionalPanel />
			</Container>
		</main>
	);
}

export default MainPage;
