import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

function App() {
  return (
    <Container maxidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'> Memo </Typography>
      </AppBar>
    </Container>
  );
}

export default App;
