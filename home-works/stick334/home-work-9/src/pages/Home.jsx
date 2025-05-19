import PostsList from "../components/PostsList.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple, red } from '@mui/material/colors';

const theme = createTheme({
	palette: {
	  primary: red,
	  secondary: red,
	},
  });

const Home = () => {
	return (
			<div>
				  <ThemeProvider theme={theme}>
				
				<PostsList/>
				</ThemeProvider>
			</div>
	);
};

export default Home;