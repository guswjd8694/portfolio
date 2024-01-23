const motions = {
  calcValue: (_el, options) => {
    let currentScroll = 0;
    let offsetTop = 0;

    // 스크롤이 요소에 닿는 시점
    if (_el.offsetTop !== undefined) {
      offsetTop = _el.offsetTop;
      currentScroll = Math.max(0, scrollY - offsetTop);
    }

    const _calcValue = (_el, _opt, _scroll) => {
      let partValue;
      let partScroll = Math.max(0, _scroll - (_el.offsetHeight - innerHeight) * _opt.startPoint);
      let partStart = (_el.offsetHeight - innerHeight) * _opt.startPoint;
      let partEnd = (_el.offsetHeight - innerHeight) * _opt.endPoint;
      let partRatio = Math.min(1, partScroll / (partEnd - partStart));

      if (_scroll <= partStart) {
        partValue = _opt.startValue;
      } else if (_scroll >= partEnd) {
        partValue = _opt.endValue;
      } else {
        partValue = partRatio.toFixed(4) * 1 * (_opt.endValue - _opt.startValue) + _opt.startValue;
      }

      return partValue;
    };

    return _calcValue(_el, options, currentScroll);
  },

  ratio: (_el) => {
    let currentScroll = 0;

    if (_el.offsetTop !== undefined) {
      offsetTop = _el.offsetTop;
      currentScroll = Math.max(0, scrollY - offsetTop);
    }

    return (currentScroll / (_el.offsetHeight - innerHeight)).toFixed(4) * 1;
  },
};
