# agrosense (agrosense)

# AgroSense App (Android Frontend)

**AgroSense** is a smart agriculture mobile application built using the [Quasar Framework](https://quasar.dev/) (Vue.js + Cordova), designed to assist farmers in managing their fields and IoT soil sensors effectively. The app interacts with a Laravel backend through RESTful APIs and provides a mobile-first experience tailored for on-the-field use.

---

## 📲 Features

- 🔐 User authentication via Laravel Sanctum
- 🌱 Create and manage farms using GPS coordinates
- 📷 Scan and register sensors with QR codes
- 📍 Assign sensors to specific farms with geolocation
- 📊 View historical humidity data through interactive charts
- ⚙️ Manage user profile and credentials
- 🚪 Secure logout

---

## 🧭 Main Navigation (Drawer Menu)

| Label          | Icon          | Route        | Description                                           |
| -------------- | ------------- | ------------ | ----------------------------------------------------- |
| **Dashboard**  | `home`        | `/dashboard` | Overview with total sensors, farms, and recent alerts |
| **My Farms**   | `agriculture` | `/farms`     | List of user farms, tap to view details               |
| **Sensors**    | `sensors`     | `/sensors`   | Global list of all sensors                            |
| **History**    | `insights`    | `/history`   | Graphs showing sensor data over time                  |
| **My Account** | `person`      | `/account`   | Update name, email, and password                      |
| **Logout**     | `logout`      | `action`     | Logs out the user and clears token                    |

---

## 🔧 Technologies

- [Quasar Framework](https://quasar.dev/)
- [Vue.js](https://vuejs.org/)
- [Cordova](https://cordova.apache.org/)
- [Axios](https://axios-http.com/) for API calls
- [Vue Router](https://router.vuejs.org/) for navigation

---

## 🚀 Project Setup

```bash
# Install dependencies
npm install

# Run in development mode (web preview)
quasar dev

# Run on Android device
quasar dev -m capacitor -T android
```

---

## 📡 Backend

The backend API is available here:  
👉 [AgroSense Laravel Server](https://github.com/AgroSensePlatform/agrosense-server)

---

## 📝 License

This project is open-source and licensed under the MIT License.
