export type CatalogItem = {
  sku: string
  name: string
  category: string
  description: string
  specifications: Record<string, string>
  moq: string
  price: string
  image: string
}

export const catalogItems: CatalogItem[] = [
  {
    sku: "DELL-SRV-R760",
    name: "Dell PowerEdge R760",
    category: "Servers",
    description:
      "Enterprise-grade rack server designed for demanding workloads. Features latest generation processors with enhanced security and management capabilities.",
    specifications: {
      "Processor": "Intel Xeon Scalable 4th Gen",
      "Memory": "Up to 8TB DDR5",
      "Storage": "Up to 24 NVMe drives",
      "Form Factor": "2U Rack",
    },
    moq: "5 units",
    price: "On request",
    image: "/products/servers.jpg",
  },
  {
    sku: "HP-WS-Z8G5",
    name: "HP Z8 G5 Workstation",
    category: "Workstations",
    description:
      "Professional workstation for compute-intensive applications including CAD, simulation, and AI development.",
    specifications: {
      "Processor": "Intel Xeon W-3400",
      "Memory": "Up to 2TB ECC DDR5",
      "Graphics": "NVIDIA RTX 6000 Ada",
      "Storage": "Up to 56TB",
    },
    moq: "3 units",
    price: "On request",
    image: "/products/workstations.jpg",
  },
  {
    sku: "CISCO-SW-C9300",
    name: "Cisco Catalyst 9300",
    category: "Networking",
    description:
      "Enterprise-class stackable switch with advanced security features and cloud-managed capabilities.",
    specifications: {
      "Ports": "24/48 Multigigabit",
      "Uplinks": "4x 10G/25G SFP28",
      "PoE": "Up to 90W UPOE+",
      "Stacking": "480 Gbps",
    },
    moq: "10 units",
    price: "On request",
    image: "/products/networking.jpg",
  },
  {
    sku: "NVIDIA-GPU-A100",
    name: "NVIDIA A100 Tensor Core",
    category: "Components",
    description:
      "Data center GPU designed for AI training, inference, and high-performance computing workloads.",
    specifications: {
      "Architecture": "Ampere",
      "Memory": "80GB HBM2e",
      "Bandwidth": "2TB/s",
      "TDP": "400W",
    },
    moq: "4 units",
    price: "On request",
    image: "/products/components.jpg",
  },
  {
    sku: "WD-SSD-SN850X",
    name: "WD Black SN850X NVMe",
    category: "Storage",
    description:
      "High-performance NVMe SSD for enterprise and professional workloads with exceptional read/write speeds.",
    specifications: {
      "Capacity": "4TB",
      "Read Speed": "7,300 MB/s",
      "Write Speed": "6,600 MB/s",
      "Interface": "PCIe Gen4 x4",
    },
    moq: "50 units",
    price: "On request",
    image: "/products/storage.jpg",
  },
  {
    sku: "LENOVO-NB-X1C",
    name: "Lenovo ThinkPad X1 Carbon",
    category: "Laptops",
    description:
      "Ultra-lightweight business laptop with enterprise security features and all-day battery life.",
    specifications: {
      "Processor": "Intel Core Ultra 7",
      "Display": "14\" 2.8K OLED",
      "Memory": "32GB LPDDR5x",
      "Weight": "1.09 kg",
    },
    moq: "20 units",
    price: "On request",
    image: "/products/laptops.jpg",
  },
]

export function getCatalogItemBySku(sku: string): CatalogItem | undefined {
  return catalogItems.find((item) => item.sku.toLowerCase() === sku.toLowerCase())
}

export function getCatalogCategories(): string[] {
  return [...new Set(catalogItems.map((item) => item.category))]
}
