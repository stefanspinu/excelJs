import { Excel } from '@/components/excel/Excel'
import { Formula } from './components/formula/Formula';
import { Header } from './components/header/Header';
import { Table } from './components/table/Table';
import { Toolbar } from './components/toolbar/Toolbar';
import { createStore } from './core/store/createStore';
import { Router } from './core/routes/Router';
import { storage, debounce } from './core/utils';
import { DashboardPage } from './pages/DashboardPage';
import { ExcelPage } from './pages/ExcelPage';
import { initialState } from './redux/initialState';
import { rootReducer } from './redux/rootReducer';
import './scss/index.scss'

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage
})