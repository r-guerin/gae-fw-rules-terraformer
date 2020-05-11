export default (firstDependency, startingPriority) => (ipAdress, index) => {
  const padIndex = (index) => index.toString().padStart(2, '0');
  const getDependencyName = (index) => (index === 0 ? firstDependency : `google_uptime_source_ip_${padIndex(index)}`);
  const computePriority = (index) => index * 1000 + startingPriority;

  return `
resource "google_app_engine_firewall_rule" "google_uptime_source_ip_${padIndex(index + 1)}" {
    project      = var.project
    priority     = ${computePriority(index)}
    action       = var.allowAction
    source_range = "${ipAdress}/32"

    depends_on = [google_app_engine_firewall_rule.${getDependencyName(index)}]
}
`;
};
