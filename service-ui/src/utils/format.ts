import { Profile } from "../profile.types";

export const formatProfileName = (profile: Profile) => {
  return [profile.identity.traits.name.first, profile.identity.traits.name.last]
    .filter((x) => !!x)
    .join(" ");
};
