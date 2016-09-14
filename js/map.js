ymaps.ready(init);

function init(){

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [59.9363, 30.3212],
        zoom: 16,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark([59.9363, 30.3202] , {},
        { iconLayout: 'default#image',
          iconImageHref: 'img/icon-map-pin.svg',
          iconImageSize: [230, 146],
          iconImageOffset: [-45, -147] });

    myMap.geoObjects.add(myPlacemark);

}
