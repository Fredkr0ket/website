import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wkMo3qc7k5k7HifC8X98i3",  // ID of a project you are using
      token: "F6N0MUGJ3KAqas1Ahy6RXboJFnx9kmjIxciaCfch9ZckwbCBn1hld6UuXGXrb2HrDOglM2GOHuL6N0RA3Niw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})