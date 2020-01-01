import Pagination from './entities/Pagination';
import Row from './entities/Row';

import Cell from './entities/Cells/Cell';
import Header from './entities/Cells/Header';
import Icon from './entities/Cells/Icon';
import Image from './entities/Cells/Image';
import Label from './entities/Cells/Label';
import Link from './entities/Cells/Link';
import Summary from './entities/Cells/Summary';

export { default as DataTable } from './components/DataTable.vue';
export { default as ActionButton } from './components/ActionButton.vue';
export { default as ActionButtonSeparator } from './components/ActionButtonSeparator.vue';

export const Entities = {
  Pagination,
  Row,
  Cells: {
    Cell,
    Header,
    Icon,
    Image,
    Label,
    Link,
    Summary,
  },
};
