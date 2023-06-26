import { Header } from './components/Header/Header';
import { ModalAddProduct } from './components/ModalAddProduct/ModalAddProduct';
import { ModalAddSeller } from './components/ModalAddSeller/ModalAddSeller';
import { ModalCreateZvit } from './components/ModalCreateZvit/ModalCreateZvit';
import { ModalZvit } from './components/ModalZvit/ModalZvit';
import { ProductList } from './components/ProductList/ProductList';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux'


function App() {

  const store = setupStore();

  return (
    <Provider store={store}>
      <Header/>
      <ProductList/>
      <ModalCreateZvit/>
      <ModalZvit/>
      <ModalAddProduct/>
      <ModalAddSeller/>
    </Provider>
  );
}

export default App;
