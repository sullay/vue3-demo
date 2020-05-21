import DataSet from '@antv/data-set'
import { Chart } from '@antv/g2'
import mapData from './china-provinces.geo.json'
export function draw () {
  const chart = new Chart({
    container: 'china-map',
    autoFit: false,
    width: 1400,
    height: 1200,
    padding: [55, 20]
  })
  // 同步度量
  chart.scale({
    longitude: {
      sync: true
    },
    latitude: {
      sync: true
    }
  })
  chart.axis(false)

  // 绘制世界地图背景
  const ds = new DataSet()
  const worldMap = ds.createView('back')
    .source(mapData, {
      type: 'GeoJSON'
    })
  const worldMapView = chart.createView()
  worldMapView.data(worldMap.rows)
  worldMapView.tooltip(false)
  worldMapView.polygon().position('longitude*latitude').style({
    // 地图样式
    fill: '#fff',
    stroke: '#ccc',
    lineWidth: 1
  })

  // 可视化用户数据
  const userData = [
    { name: '湖北省' },
    { name: '北京市' }
  ]
  const userDv = ds.createView()
    .source(userData)
    .transform({
      geoDataView: worldMap,
      field: 'name',
      type: 'geo.region',
      as: ['longitude', 'latitude']
    })
  const userView = chart.createView()
  userView.tooltip(false)
  userView.data(userDv.rows)
  userView.polygon()
    .position('longitude*latitude')
    .color('#0A61D7')
    .style({
      fillOpacity: 0.85
    })
    .state({
      // 激活状态
      active: {
        style: {
          stroke: 'red'
        }
      }
    })
    // 文字
    .label('name', {
      offsetX: 0,
      offsetY: 10,
      style: {
        fontSize: 12
      }
    })
    .animate({
      leave: {
        animation: 'fade-out'
      }
    })
  userView.interaction('element-active')

  chart.render()
}
