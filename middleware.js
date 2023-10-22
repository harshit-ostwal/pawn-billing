export { default } from "next-auth/middleware";

export const config = { matcher: ['/Admin/Dashboard', '/Admin/Pledging', '/Admin/Redemption', '/Admin/Settings', '/Admin/Settings/Users', '/Admin/Reports/','/Admin/Reports/Pledging', '/Admin/Reports/Redemption','/','/Client/Dashboard','/Client/Reports','/Client/Reports/Pledging','/Client/Reports/Redemption','/UserProfile'] };