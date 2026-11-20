export type MobileAppPolicy = {
  anchorId: string;
  appName: string;
  developerName: string;
  packageName: string;
};

export const mobileAppPolicies: MobileAppPolicy[] = [
  {
    anchorId: "khajura",
    appName: "khajura Rural Municipality",
    developerName: "Khajura Rural Municipality",
    packageName: "com.khajura.app",
  },
  {
    anchorId: "besishahar",
    appName: "Besishahar Municipality",
    developerName: "Besishahar Municipality",
    packageName: "com.besishaharmun.app",
  },
];
