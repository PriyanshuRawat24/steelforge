export const fetchServices =  async () => {
    const response = await fetch("/service.json");
    const data = await response.json();
    return data;
}
