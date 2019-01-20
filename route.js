ymaps.ready(function () {
var location = ymaps.geolocation;
var myMap = new ymaps.Map('map', {
    center: [42.36, 69.49],
    zoom: 14,
        // Добавим кнопку для построения маршрутов на карту.
        controls: ['routeButtonControl']
    });
    var control = myMap.controls.get('routeButtonControl');

    // Зададим координаты пункта отправления с помощью геолокации.
    control.routePanel.geolocate('from');

    // Откроем панель для построения маршрутов.
    control.state.set('expanded', true);
	
	control.routePanel.geolocate('from');
	control.routePanel.state.set({
    to: [42.36476, 69.494534],
    type: "auto"
});
	
});