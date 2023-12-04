import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { tsParticles } from "tsparticles-engine";
import { loadParallaxMover } from "tsparticles-move-parallax";
import { useColorModeValue } from "@chakra-ui/react";

const BackgroundParticles = () => {
  const bgColor = useColorModeValue("#FFF", "#1A202C");

  const nodeColor = useColorModeValue("#445964", "#8D9396");

  const linkColor = useColorModeValue("#263138", "#b0b4b7");

  const particlesInit = useCallback(async (engine: any) => {
    // Load the parallax mover
    await loadParallaxMover(tsParticles);

    // Load additional presets or shapes if needed
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: bgColor,
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: nodeColor,
          },
          links: {
            color: linkColor,
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "polygon",
            polygon: {
              nb_sides: 6,
            },
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;
