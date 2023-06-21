const slider = document.getElementById('slider');

const inputValues = [
  document.getElementById('min'),
  document.getElementById('max')
];

noUiSlider.create(slider, {
    start: [0, 123],
    connect: true,
    step: 1,
    range: {
        'min': [0],
        'max': [140]
    },
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
});

slider.noUiSlider.on('update', function (values, handle, unencoded) {
  inputValues[handle].value = values[handle];
});
