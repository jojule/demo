import { useGridDataProvider } from '@vaadin/hilla-react-crud';
import { WineService } from 'Frontend/generated/endpoints';
import { ChartSeries } from '@vaadin/react-components-pro/ChartSeries';
import { Chart } from '@vaadin/react-components-pro/Chart';
import { GridSortColumn } from '@vaadin/react-components';
import { Grid } from '@vaadin/react-components';
import { VerticalLayout } from '@vaadin/react-components';
import type { ViewConfig } from '@vaadin/hilla-file-router/types.js';


export const config: ViewConfig = {
  title: 'Data',
  menu: {
      icon: 'vaadin:database'
  }
};

export default function Data() {
  const dataProvider = useGridDataProvider(WineService.list);
return (
    <div className="flex flex-col">
      <h1>This is Data</h1><VerticalLayout></VerticalLayout><Grid
         dataProvider={ dataProvider }>
      
      
      
      <GridSortColumn path="vintageYear" header="Vintage Year" />
<GridSortColumn path="grapeVariety" header="Grape Variety" />
<GridSortColumn path="region" header="Region" />
<GridSortColumn path="alcoholContent" header="Alcohol Content" />
<GridSortColumn path="tastingNotes" header="Tasting Notes" />
<GridSortColumn path="bottleSize" header="Bottle Size" />
<GridSortColumn path="releaseDate" header="Release Date" />
<GridSortColumn path="producer" header="Producer" />
    </Grid><Chart
          type="line"
          title="Energy Consumption Trends by Month (2023 vs 2024)"
          additionalOptions={{"xAxis":{"title":{"text":"Month"},"categories":["January","February","March","April","May","June","July","August","September","October","November","December"]},"yAxis":{"title":{"text":"Energy Consumption (kWh)"}}}}>
          
          <ChartSeries title="2023" values={[1450000,1400000,1350000,1320000,1250000,1200000,1150000,1180000,1220000,1260000,1300000,1350000]} /><ChartSeries title="2024" values={[1500000,1450000,1380000,1350000,1300000,1250000,1200000,1230000,1270000,1300000,1350000,1400000]} />
        </Chart>
    </div>
  );
}
