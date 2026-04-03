-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2026 at 11:39 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abc`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `short_description` text DEFAULT NULL,
  `content` text NOT NULL,
  `main_image` varchar(255) DEFAULT NULL,
  `gallery_images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`gallery_images`)),
  `description` text DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `slug`, `short_description`, `content`, `main_image`, `gallery_images`, `description`, `tags`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Growth of E-commerce Logistics', 'ecommerce-logistics', 'How e-commerce is shaping the logistics industry', '<style>\n.blog-content p {\n  margin-bottom: 20px;\n  line-height: 1.9;\n  color: #444;\n}\n</style>\n\n<div class=\"blog-content\">\n\n<p><strong>Growth of E-commerce Logistics</strong></p>\n\n<p>\nE-commerce logistics has experienced rapid growth due to the increasing popularity of online shopping and digital platforms. It involves the management of storage, inventory, transportation, and delivery of goods purchased online. With the rise of smartphones and internet access, businesses are focusing more on fast, efficient, and reliable logistics systems to meet customer expectations.\n</p>\n\n<p><strong>Importance of E-commerce Logistics</strong></p>\n\n<p>\nE-commerce logistics plays a critical role in ensuring customer satisfaction by providing quick and smooth delivery services. It helps businesses handle large volumes of orders, maintain operational efficiency, and create a seamless shopping experience. Strong logistics systems are essential for building trust and retaining customers in a competitive market.\n</p>\n\n<p><strong>Key Components of E-commerce Logistics</strong></p>\n\n<p>\n1. <strong>Order Processing:</strong> Ensures that customer orders are received, verified, and processed quickly and accurately.\n</p>\n\n<p>\n2. <strong>Warehousing:</strong> Stores products in an organized way to allow fast picking, packing, and dispatch.\n</p>\n\n<p>\n3. <strong>Inventory Management:</strong> Maintains proper stock levels and prevents delays or stock shortages.\n</p>\n\n<p>\n4. <strong>Shipping & Delivery:</strong> Manages transportation of goods from warehouses to customers efficiently.\n</p>\n\n<p>\n5. <strong>Last-Mile Delivery:</strong> Focuses on delivering products to the final customer location quickly and safely.\n</p>\n\n<p>\n6. <strong>Returns Management:</strong> Handles product returns, replacements, and refunds smoothly.\n</p>\n\n<p>\n7. <strong>Packaging:</strong> Ensures products are packed securely to avoid damage during transit.\n</p>\n\n<p>\n8. <strong>Tracking Systems:</strong> Provides real-time updates to customers about their order status.\n</p>\n\n<p><strong>Factors Driving Growth</strong></p>\n\n<p>\n1. <strong>Increase in Online Shopping:</strong> More people prefer online shopping due to convenience and variety.\n</p>\n\n<p>\n2. <strong>Faster Delivery Expectations:</strong> Customers expect same-day or next-day delivery services.\n</p>\n\n<p>\n3. <strong>Technological Advancements:</strong> Use of AI, automation, and data analytics improves logistics efficiency.\n</p>\n\n<p>\n4. <strong>Global Reach:</strong> Businesses can sell products worldwide through e-commerce platforms.\n</p>\n\n<p>\n5. <strong>Digital Payments:</strong> Easy and secure payment methods boost online shopping growth.\n</p>\n\n<p>\n6. <strong>Improved Infrastructure:</strong> Better transportation and warehousing facilities support logistics growth.\n</p>\n\n<p><strong>Benefits of Strong E-commerce Logistics</strong></p>\n\n<p>\n1. <strong>Improved Customer Experience:</strong> Fast and reliable delivery increases satisfaction and trust.\n</p>\n\n<p>\n2. <strong>Higher Sales:</strong> Efficient logistics leads to more orders and repeat customers.\n</p>\n\n<p>\n3. <strong>Better Order Accuracy:</strong> Reduces mistakes in picking, packing, and delivery.\n</p>\n\n<p>\n4. <strong>Scalability:</strong> Helps businesses manage increasing demand easily.\n</p>\n\n<p>\n5. <strong>Cost Efficiency:</strong> Optimized logistics reduces operational and delivery costs.\n</p>\n\n<p>\n6. <strong>Brand Reputation:</strong> Reliable delivery services improve brand image.\n</p>\n\n<p><strong>Future of E-commerce Logistics</strong></p>\n\n<p>\nThe future of e-commerce logistics will be driven by advanced technologies such as drone deliveries, automated warehouses, artificial intelligence, and robotics. These innovations will make logistics faster, smarter, and more cost-effective. Companies will focus more on sustainability, eco-friendly packaging, and efficient delivery systems to meet future demands.\n</p>\n\n</div>', 'blogs/main/01KN1NW7RJCV2XP79AFSR71Z0M.jpg', '[]', NULL, '[]', '2026-03-31 04:38:55', '2026-04-02 04:02:48', NULL),
(2, 'Inventory Management Best Practices', 'inventory-management', 'Tips to improve inventory control in logistics', '<style>\n.blog-content p {\n  margin-bottom: 20px;\n  line-height: 1.9;\n  color: #444;\n}\n</style>\n\n<div class=\"blog-content\">\n\n<p><strong>Inventory Management Best Practices</strong></p>\n\n<p>\nInventory management is a crucial function for businesses that handle physical goods. It ensures that the right products are available at the right time, helping to reduce waste, avoid losses, and improve operational efficiency. A well-managed inventory system supports smooth business operations and enhances overall productivity.\n</p>\n\n<p><strong>Importance of Inventory Management</strong></p>\n\n<p>\nEffective inventory management helps businesses maintain optimal stock levels, avoid shortages, and reduce excess inventory. It improves cash flow by minimizing unnecessary stock investments and ensures better customer satisfaction by keeping products readily available.\n</p>\n\n<p><strong>Key Inventory Management Practices</strong></p>\n\n<p>\n1. <strong>Accurate Stock Tracking:</strong> Maintaining real-time visibility of inventory to prevent stockouts and overstocking.\n</p>\n\n<p>\n2. <strong>Demand Forecasting:</strong> Using historical data and trends to predict future demand and plan inventory effectively.\n</p>\n\n<p>\n3. <strong>Inventory Categorization (ABC Analysis):</strong> Classifying items based on value and importance to prioritize management efforts.\n</p>\n\n<p>\n4. <strong>Regular Audits:</strong> Conducting routine checks to ensure physical stock matches system records.\n</p>\n\n<p>\n5. <strong>Safety Stock Management:</strong> Keeping extra stock to handle unexpected demand or supply delays.\n</p>\n\n<p>\n6. <strong>Reorder Point Setting:</strong> Determining the right time to reorder products to avoid stock shortages.\n</p>\n\n<p>\n7. <strong>Supplier Management:</strong> Building strong relationships with suppliers for timely and reliable deliveries.\n</p>\n\n<p>\n8. <strong>Batch and Expiry Tracking:</strong> Managing products with expiry dates to reduce waste and losses.\n</p>\n\n<p>\n9. <strong>Standardized Processes:</strong> Following consistent procedures for receiving, storing, and dispatching goods.\n</p>\n\n<p><strong>Modern Inventory Techniques</strong></p>\n\n<p>\n1. <strong>Just-in-Time (JIT):</strong> Maintaining minimal stock and ordering goods only when needed to reduce holding costs.\n</p>\n\n<p>\n2. <strong>Automation Systems:</strong> Using software and tools to manage inventory efficiently with minimal manual effort.\n</p>\n\n<p>\n3. <strong>Barcode & RFID Tracking:</strong> Enhancing accuracy and speed in tracking inventory movements.\n</p>\n\n<p>\n4. <strong>Cloud-Based Solutions:</strong> Accessing inventory data anytime and from anywhere for better decision-making.\n</p>\n\n<p>\n5. <strong>AI-Based Forecasting:</strong> Using artificial intelligence to predict demand more accurately.\n</p>\n\n<p>\n6. <strong>Warehouse Management Systems (WMS):</strong> Improving storage, picking, and inventory control processes.\n</p>\n\n<p><strong>Benefits of Efficient Inventory Management</strong></p>\n\n<p>\n1. <strong>Reduced Costs:</strong> Minimizes storage, handling, and wastage expenses.\n</p>\n\n<p>\n2. <strong>Improved Accuracy:</strong> Reduces human errors and ensures correct stock levels.\n</p>\n\n<p>\n3. <strong>Better Customer Satisfaction:</strong> Ensures products are available when needed.\n</p>\n\n<p>\n4. <strong>Optimized Operations:</strong> Streamlines workflows and improves efficiency.\n</p>\n\n<p>\n5. <strong>Increased Profitability:</strong> Reduces losses and improves overall business performance.\n</p>\n\n<p>\n6. <strong>Faster Decision Making:</strong> Real-time data helps in making quick and accurate decisions.\n</p>\n\n<p><strong>Future of Inventory Management</strong></p>\n\n<p>\nThe future of inventory management will be driven by advanced technologies such as AI, IoT, and automation. Smart systems will provide real-time tracking, predictive analytics, and automated stock control, helping businesses operate more efficiently. These innovations will make inventory management faster, more accurate, and highly cost-effective.\n</p>\n\n</div>', 'blogs/main/01KN1P32648Q1FK1PYYKF88274.jpg', '[]', NULL, '[]', '2026-03-31 04:42:38', '2026-04-02 04:04:36', NULL),
(3, 'Last Mile Delivery Challenges', 'last-mile-delivery', 'Exploring challenges in last mile delivery and solution', '<style>\n.blog-content p {\n  margin-bottom: 20px;\n  line-height: 1.9;\n  color: #444;\n}\n</style>\n\n<div class=\"blog-content\">\n\n<p><strong>Last Mile Delivery</strong></p>\n\n<p>\nLast mile delivery is the final and most crucial stage in the logistics process, where goods are transported from a distribution center or warehouse to the end customer. It directly impacts the customer’s experience, making it one of the most important aspects of modern logistics.\n</p>\n\n<p><strong>Importance of Last Mile Delivery</strong></p>\n\n<p>\nLast mile delivery is essential because it represents the final interaction between the company and the customer. A fast, smooth, and reliable delivery process helps build trust, improve brand reputation, and increase customer satisfaction.\n</p>\n\n<p><strong>Key Functions of Last Mile Delivery</strong></p>\n\n<p>\n• <strong>Order Fulfillment:</strong> Ensures that products are delivered accurately, safely, and on time to customers.\n</p>\n\n<p>\n• <strong>Route Optimization:</strong> Uses advanced tools to determine the fastest and most efficient delivery routes.\n</p>\n\n<p>\n• <strong>Customer Communication:</strong> Provides real-time updates and tracking information to customers.\n</p>\n\n<p>\n• <strong>Delivery Execution:</strong> Ensures smooth and successful delivery at the customer’s doorstep.\n</p>\n\n<p>\n• <strong>Proof of Delivery:</strong> Confirms delivery through signatures, OTP, or digital confirmation.\n</p>\n\n<p>\n• <strong>Returns Handling:</strong> Manages reverse logistics for returned or exchanged products.\n</p>\n\n<p>\n• <strong>Time Slot Management:</strong> Allows customers to choose preferred delivery time slots.\n</p>\n\n<p>\n• <strong>Last-Mile Tracking:</strong> Provides accurate tracking until the product reaches the final destination.\n</p>\n\n<p><strong>Challenges in Last Mile Delivery</strong></p>\n\n<p>\n• <strong>High Costs:</strong> Last mile delivery is often the most expensive part of the supply chain.\n</p>\n\n<p>\n• <strong>Traffic and Delays:</strong> Urban congestion can slow down deliveries.\n</p>\n\n<p>\n• <strong>Failed Deliveries:</strong> Incorrect addresses or customer unavailability can lead to failures.\n</p>\n\n<p>\n• <strong>Scalability Issues:</strong> Managing high order volumes during peak times is difficult.\n</p>\n\n<p>\n• <strong>Limited Infrastructure:</strong> Poor roads and delivery systems can create challenges.\n</p>\n\n<p>\n• <strong>Customer Expectations:</strong> Demand for faster delivery increases pressure on logistics.\n</p>\n\n<p><strong>Benefits of Efficient Last Mile Delivery</strong></p>\n\n<p>\n• <strong>Faster Delivery:</strong> Quick deliveries improve customer satisfaction.\n</p>\n\n<p>\n• <strong>Improved Accuracy:</strong> Reduces delivery errors.\n</p>\n\n<p>\n• <strong>Better Customer Experience:</strong> Smooth delivery builds trust.\n</p>\n\n<p>\n• <strong>Competitive Advantage:</strong> Helps businesses stay ahead in the market.\n</p>\n\n<p>\n• <strong>Reduced Costs:</strong> Optimized processes lower expenses.\n</p>\n\n<p>\n• <strong>Higher Customer Retention:</strong> Satisfied customers return again.\n</p>\n\n<p><strong>Future of Last Mile Delivery</strong></p>\n\n<p>\nThe future of last mile delivery includes technologies like drones, autonomous vehicles, and AI-based systems. These innovations will make logistics faster, smarter, and more cost-effective.\n</p>\n\n</div>', 'blogs/main/01KN1PBJQZ2QCQVYEVMQNHRWJF.jpg', '[]', NULL, '[]', '2026-03-31 04:47:17', '2026-04-02 04:07:12', NULL),
(4, 'Role of Transportation in Supply Chain', 'role-of-transportation', 'Understanding transportation\'s impact on logistics efficiency.', '<p><strong>Role of Transportation</strong></p>\n\n<p>\nTransportation plays a vital role in logistics and supply chain management by ensuring the smooth movement of goods from suppliers to customers. It connects different parts of the supply chain and helps businesses deliver products on time.\n</p>\n\n<p><strong>Importance of Transportation</strong></p>\n\n<p>\nTransportation is essential for maintaining the flow of goods and services. It helps businesses expand their reach, improve customer satisfaction, and support economic growth.\n</p>\n\n<p><strong>Key Functions of Transportation</strong></p>\n\n<p><strong>Movement of Goods:</strong><br>\nEnsures raw materials and finished products are delivered to the right place at the right time.</p>\n\n<p><strong>Time Efficiency:</strong><br>\nHelps reduce delivery time and ensures faster order fulfillment.</p>\n\n<p><strong>Cost Management:</strong><br>\nOptimizes routes and modes of transport to reduce fuel and operational costs.</p>\n\n<p><strong>Connectivity:</strong><br>\nLinks manufacturers, warehouses, and customers across different locations.</p>\n\n<p><strong>Modes of Transportation</strong></p>\n\n<p><strong>Road Transport:</strong><br>\nMost commonly used for short and medium distances due to flexibility and accessibility.</p>\n\n<p><strong>Rail Transport:</strong><br>\nCost-effective for transporting bulk goods over long distances.</p>\n\n<p><strong>Air Transport:</strong><br>\nFastest mode, ideal for urgent and high-value shipments.</p>\n\n<p><strong>Sea Transport:</strong><br>\nBest suited for international trade and heavy cargo movement.</p>\n\n<p><strong>Benefits of Efficient Transportation</strong></p>\n\n<p><strong>Faster Delivery:</strong><br>\nEnsures timely delivery and improves customer satisfaction.</p>\n\n<p><strong>Reduced Costs:</strong><br>\nEfficient planning helps minimize fuel and operational expenses.</p>\n\n<p><strong>Improved Reliability:</strong><br>\nConsistent transportation builds trust with customers.</p>\n\n<p><strong>Better Supply Chain Flow:</strong><br>\nSmooth transportation keeps the entire supply chain running efficiently.</p>\n\n<p><strong>Future of Transportation</strong></p>\n\n<p>\nThe future of transportation lies in smart technologies like GPS tracking, AI-based route optimization, and electric vehicles. These innovations will make transportation faster, more efficient, and environmentally friendly.\n</p>', 'blogs/main/01KN1PFAJDVGRFRFG9DE004XJC.jpg', '[]', NULL, '[]', '2026-03-31 04:49:20', '2026-03-31 05:58:07', NULL),
(5, 'Importance of Warehousing in Logistics', 'importance-of-warehousing', 'Why warehousing plays a crucial role in logistics management', '<style>\n.blog-content p {\n  margin-bottom: 20px;\n  line-height: 1.9;\n  color: #444;\n}\n</style>\n\n<div class=\"blog-content\">\n\n<p><strong>Warehouse in Logistics</strong></p>\n\n<p>\nA warehouse is a storage facility where goods are kept before they are distributed to retailers or customers. It plays a crucial role in logistics by ensuring the smooth flow of products from manufacturers to end users. Warehouses help businesses manage inventory, reduce delays, and improve overall efficiency.\n</p>\n\n<p>\n<strong>Storage of Goods:</strong> Warehouses provide a safe place to store raw materials, semi-finished, and finished goods until they are needed.\n</p>\n\n<p>\n <strong>Inventory Control:</strong> Helps in tracking stock levels, managing orders, and avoiding overstocking or stock shortages.\n</p>\n\n<p>\n <strong>Order Processing:</strong> Warehouses handle picking, packing, and shipping of products efficiently.\n</p>\n\n<p>\n <strong>Product Safety:</strong> Goods are protected from damage, theft, and environmental conditions like heat and moisture.\n</p>\n\n<p>\n <strong>Bulk Storage:</strong> Businesses can store large quantities of goods and distribute them as per demand.\n</p>\n\n<p>\n <strong>Improved Transportation:</strong> Warehouses located near markets reduce delivery time and transportation costs.\n</p>\n\n<p>\n <strong>Value-Added Services:</strong> Includes packaging, labeling, sorting, branding, and quality checking of goods.\n</p>\n\n<p>\n <strong>Seasonal Storage:</strong> Helps store extra goods during peak seasons to meet high customer demand.\n</p>\n\n<p>\n <strong>Risk Reduction:</strong> Modern warehouses have security systems like CCTV, alarms, and fire protection to reduce risks.\n</p>\n\n<p>\n <strong>Better Supply Chain Management:</strong> Warehouses connect suppliers, manufacturers, and customers, improving coordination.\n</p>\n\n<p>\n<strong>Use of Technology:</strong> Advanced systems like barcode scanning, automation, and warehouse management systems (WMS) increase efficiency.\n</p>\n\n<p>\n <strong>Flexibility:</strong> Warehouses allow businesses to expand storage as per growth and demand.\n</p>\n\n<p>\n <strong>Faster Delivery:</strong> Storing goods closer to customers helps in quick delivery and better service.\n</p>\n\n<p>\n <strong>Cost Efficiency:</strong> Reduces transportation and handling costs by optimizing storage and distribution.\n</p>\n\n<p>\n15. <strong>Global Trade Support:</strong> Warehouses help manage import-export goods and ensure smooth international logistics.\n</p>\n\n<p>\nIn conclusion, warehouses are an essential part of logistics that help businesses store, manage, and distribute goods efficiently. They improve supply chain performance, reduce costs, and enhance customer satisfaction.\n</p>\n\n</div>', 'blogs/main/01KN1PK71NA7RJRA8H5KAFYVKW.jpg', '[]', NULL, '[]', '2026-03-31 04:51:28', '2026-04-02 04:01:12', NULL),
(6, 'Logistics Technology: The Future of Supply Chain', 'logistics-technology-the-future-of-supply-chain', 'How modern technology is transforming logistics operations', '<div style=\"line-height: 1.8;\">\n\n  <p style=\"margin-bottom: 15px;\"><strong>Logistics Technology</strong></p>\n\n  <p style=\"margin-bottom: 20px;\">\n    Logistics technology plays a crucial role in modern supply chain management by improving efficiency, accuracy, and speed. It helps businesses manage operations smoothly, reduce manual efforts, and deliver better services to customers. With the growth of e-commerce and global trade, logistics technology has become essential for staying competitive.\n  </p>\n\n  <p style=\"margin-bottom: 10px;\"><strong>Importance of Logistics Technology</strong></p>\n\n  <p style=\"margin-bottom: 20px;\">\n    Logistics technology enables real-time tracking, better communication, and smarter decision-making. It reduces delays, improves resource utilization, and enhances overall productivity. Businesses can monitor shipments, manage inventory, and optimize delivery routes efficiently.\n  </p>\n\n  <p style=\"margin-bottom: 10px;\"><strong>Key Logistics Technologies</strong></p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>GPS Tracking:</strong> Allows real-time tracking of shipments and vehicles, improving visibility and delivery accuracy.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Warehouse Management Systems (WMS):</strong> Helps manage inventory, storage, picking, and order processing efficiently.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Transportation Management Systems (TMS):</strong> Optimizes route planning, reduces fuel costs, and improves delivery speed.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Automation & Robotics:</strong> Used in warehouses for sorting, packing, and handling goods with minimal human effort.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Barcode & RFID Systems:</strong> Improves tracking accuracy and speeds up inventory handling processes.</p>\n\n  <p style=\"margin-bottom: 20px;\">• <strong>Cloud-Based Systems:</strong> Enables access to logistics data anytime and from anywhere.</p>\n\n  <p style=\"margin-bottom: 10px;\"><strong>Benefits of Logistics Technology</strong></p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Improved Efficiency:</strong> Streamlines operations and reduces manual work.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Cost Reduction:</strong> Optimizes routes and processes to save fuel and operational costs.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Better Customer Experience:</strong> Provides faster and more reliable deliveries.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Real-Time Visibility:</strong> Gives complete control and tracking of goods throughout the supply chain.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Higher Accuracy:</strong> Reduces errors in inventory and delivery processes.</p>\n\n  <p style=\"margin-bottom: 20px;\">• <strong>Scalability:</strong> Helps businesses grow and manage increasing demand efficiently.</p>\n\n  <p style=\"margin-bottom: 10px;\"><strong>Challenges in Logistics Technology</strong></p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>High Initial Cost:</strong> Implementing advanced technology requires significant investment.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>System Integration:</strong> Difficulty in integrating new systems with existing operations.</p>\n\n  <p style=\"margin-bottom: 10px;\">• <strong>Training Requirements:</strong> Employees need proper training to use advanced systems.</p>\n\n  <p style=\"margin-bottom: 20px;\">• <strong>Data Security:</strong> Protecting sensitive logistics data is a major concern.</p>\n\n  <p style=\"margin-bottom: 10px;\"><strong>Future of Logistics Technology</strong></p>\n\n  <p>\n    The future of logistics technology includes innovations like artificial intelligence (AI), Internet of Things (IoT), blockchain, and autonomous vehicles. These technologies will make logistics faster, smarter, and more transparent. Businesses will focus on automation, real-time analytics, and eco-friendly solutions to improve efficiency and sustainability.\n  </p>\n\n</div>', 'blogs/main/01KN1PVKS0RBCSC31EH4MZK7N2.jpg', '[]', NULL, '[]', '2026-03-31 04:56:03', '2026-04-02 04:08:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-356a192b7913b04c54574d18c28d46e6395428ab', 'i:2;', 1775042370),
('laravel-cache-356a192b7913b04c54574d18c28d46e6395428ab:timer', 'i:1775042370;', 1775042370),
('laravel-cache-livewire-rate-limiter:a17961fa74e9275d529f489537f179c05d50c2f3', 'i:1;', 1775120975),
('laravel-cache-livewire-rate-limiter:a17961fa74e9275d529f489537f179c05d50c2f3:timer', 'i:1775120975;', 1775120975);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `company`, `city`, `state`, `country`, `email`, `phone`, `message`, `created_at`, `updated_at`) VALUES
(1, 'Ayushi Parmar', 'tech', 'va', 'bf', 'India', 'ayushiparmar0907@gmail.com', '9825868223', 'hsvdgdsvcjdvchjvchdvchdvs', '2026-04-01 07:30:22', '2026-04-01 07:30:22'),
(2, 'Ayushi Parmar', 'tech', 'va', 'bf', 'India', 'ayushiparmar0907@gmail.com', '9825868223', 'fbfgthtgnghny', '2026-04-02 03:47:24', '2026-04-02 03:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `galleries`
--

CREATE TABLE `galleries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `category` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `galleries`
--

INSERT INTO `galleries` (`id`, `image`, `images`, `category`, `created_at`, `updated_at`) VALUES
(1, 'gallery/01KN4C9WAET8XF4A66BKNQNFB4.jpeg', NULL, 'Delivery', '2026-03-31 06:53:00', '2026-04-01 05:49:19'),
(2, 'gallery/01KN4C8GW01WN85J84SDRKC789.jpeg', NULL, 'Delivery', '2026-03-31 06:54:53', '2026-04-01 05:48:35'),
(3, 'gallery/01KN4C7D0BAB9NCVW9BAWJTG2S.jpeg', NULL, 'Delivery', '2026-03-31 06:55:18', '2026-04-01 05:47:58'),
(4, 'gallery/01KN4C5QF5TH95WRTW324JQH35.jpeg', NULL, 'Shipping', '2026-03-31 06:56:29', '2026-04-01 05:47:03'),
(5, 'gallery/01KN4C4KFXXRXY82YV43ZJ39PD.jpeg', NULL, 'Shipping', '2026-03-31 06:56:51', '2026-04-01 05:46:26'),
(6, 'gallery/01KN4C3C66VXMAY4XRWFSBPSN3.jpeg', NULL, 'Shipping', '2026-03-31 06:57:13', '2026-04-01 05:45:46'),
(7, 'gallery/01KN4C1BAYHZ4HX70121YYKH28.jpeg', NULL, 'Warehouse', '2026-03-31 06:58:41', '2026-04-01 05:44:40'),
(8, 'gallery/01KN4C0D6EP6AW4CN4SMYNYXFE.jpeg', NULL, 'Warehouse', '2026-03-31 06:59:13', '2026-04-01 05:44:09'),
(9, 'gallery/01KN4BZ1FXYBCEN9QJB1B577VP.jpeg', NULL, 'Warehouse', '2026-03-31 06:59:39', '2026-04-01 05:43:24'),
(10, 'gallery/01KN4BDXHHDYJ6TWPZAPJMYEMH.jpg', NULL, 'Truck', '2026-03-31 07:00:42', '2026-04-01 05:34:03'),
(11, 'gallery/01KN4BBV01G94CG3XFED5D9G38.jpeg', NULL, 'Truck', '2026-03-31 07:01:09', '2026-04-01 05:32:55'),
(12, 'gallery/01KN4BA6Q3WV7BM8R3DNFDA9GR.jpeg', NULL, 'Truck', '2026-03-31 07:01:33', '2026-04-01 05:32:01');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_03_17_094646_create_blogs_table', 1),
(5, '2026_03_17_103807_add_description_to_blogs_table', 1),
(6, '2026_03_17_111005_create_contacts_table', 1),
(7, '2026_03_18_120510_create_personal_access_tokens_table', 1),
(8, '2026_03_23_123835_create_galleries_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('1NECveA3r8Kr2hZaTRBvhROiKb70eFx22vy4a18u', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'YTo3OntzOjY6Il90b2tlbiI7czo0MDoiNnA4Q0xDcnBqRmlIeVhCZ2RXNExPeFJuOTI3Nkh2blJZV1NZajE3NSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbiI7czo1OiJyb3V0ZSI7czozMDoiZmlsYW1lbnQuYWRtaW4ucGFnZXMuZGFzaGJvYXJkIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjQ6IjYxMDQxZjNjYTJlMDI0NzgyYzdjZjVlNWZmNmY0ZDY1MDcxYTc3ODY5YmFmZjgwODk2NWVhMGRiZTNmY2IxNDUiO3M6ODoiZmlsYW1lbnQiO2E6MDp7fX0=', 1775052577),
('AfyHxFpLvsBDr08FQ3XJ4HIDdvYPlIdpk0cle9Td', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoibzFyZTlxZzd2VXN2VDMzak1ZNjUyVnNxT0R2N0dQcXAwRG9EcU1MNCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi9ibG9ncyI7czo1OiJyb3V0ZSI7czozNjoiZmlsYW1lbnQuYWRtaW4ucmVzb3VyY2VzLmJsb2dzLmluZGV4Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjQ6ImE5NmRhMjk4ODc1M2IxNGFkYTY4YjU4ZDlmMjUzZTRmZWEwNTViOTAyZjg1YjVjZTgyOGMzY2JmZDY0ZThiYjIiO30=', 1775035735),
('QCMILARULfqOLXfW3qIyT5CKgYgTUkKEFj1cHqlV', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'YTo3OntzOjY6Il90b2tlbiI7czo0MDoiSmk1NEcwU3dRYnpmYzhTM2F6VTE5R3dtTU9nM24xQ0dYTnZzcHJWUiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi9ibG9ncy82L2VkaXQiO3M6NToicm91dGUiO3M6MzU6ImZpbGFtZW50LmFkbWluLnJlc291cmNlcy5ibG9ncy5lZGl0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjQ6IjYxMDQxZjNjYTJlMDI0NzgyYzdjZjVlNWZmNmY0ZDY1MDcxYTc3ODY5YmFmZjgwODk2NWVhMGRiZTNmY2IxNDUiO3M6ODoiZmlsYW1lbnQiO2E6MDp7fX0=', 1775122729);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@techstrota.com', '2026-03-31 04:26:32', '$2y$12$iwNeIlCkWJchTCA6wOiCA.anLZPBFtoRJlUcuh0Yg1Xhul35SQcUe', 'HxbJHsiVHf', '2026-03-31 04:26:33', '2026-03-31 04:26:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blogs_slug_unique` (`slug`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_reserved_at_available_at_index` (`queue`,`reserved_at`,`available_at`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
