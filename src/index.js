import { Main } from "tsparticles";
import { options } from "./options";
import { batDrawer } from "./batDrawer";
export const loadFlyingBat = (tsParticles = Main) => {
  tsParticles.addShape("bat", batDrawer);
  tsParticles.addPreset("FlyingBat", options);
};
