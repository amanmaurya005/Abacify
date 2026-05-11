const whatsappNumber = "918239086451";

export function openWhatsAppMessage(message: string) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function contactWhatsAppMessage(data: {
  name: string;
  email: string;
  phone: string;
  currentStatus: string;
  message: string;
}) {
  return [
    "New Abacify Contact Message",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Current Status: ${data.currentStatus}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export function applicationWhatsAppMessage(data: {
  fullName: string;
  email: string;
  phone: string;
  collegeOrCompany: string;
  skillLevel: string;
  reasonToJoin: string;
  github: string;
  linkedin: string;
}) {
  return [
    "New Abacify Internship Application",
    "",
    `Full Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `College / Company: ${data.collegeOrCompany}`,
    `Skill Level: ${data.skillLevel}`,
    `Portfolio / GitHub: ${data.github || "Not provided"}`,
    `LinkedIn: ${data.linkedin || "Not provided"}`,
    "",
    "Reason to Join:",
    data.reasonToJoin,
  ].join("\n");
}
