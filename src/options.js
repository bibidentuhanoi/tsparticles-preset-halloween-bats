export const options = {
  background: {
    color: "#ff6d06",
  },
  particles: {
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 20,
      value: 30,
    },
    size: {
      value: 3,
    },
    shape: {
      type: "bat",
    },
    // opacity: {
    //   random: {
    //     enable: true,
    //     minimumValue: 0.2,
    //   },
    //   value: 0.4,
    // },
    move: {
      angle: {
        offset: true,
        value: 360,
      },
      path: {
        enable: true,
        clamp: true,
        delay: {
          random: {
            enable: true,
            minimumValue: 0.2,
          },
          value: 0.6,
        },
      },
      bounce: true,
      straight: false,
      random: false,
      speed: 10,
      enable: true,
    },
  },
};
