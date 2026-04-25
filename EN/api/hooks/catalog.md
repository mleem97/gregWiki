Title: Hooks Catalog
Path: /api/hooks/catalog
Type: Reference
Audience: mod developer, framework developer
Summary: Comprehensive categorized catalog of all 309 available game hooks in gregCore, indexed by domain.
Suggested Tags: hooks, api, reference, catalog, events
Related Pages: /api/hooks/index, /getting-started/architecture
Split Recommendation: Keep as one page

# Hooks Catalog

This catalog contains all **309** game events currently intercepted and exposed by the **gregCore** framework.

## Overview by Domain

| Domain | Count | Description |
| :--- | :--- | :--- |
| **CUSTOMER** | 18 | Customer life cycle, application performance, and IP management. |
| **EMPLOYEE** | 23 | HR systems, technician assignments, and repair jobs. |
| **GAMEPLAY** | 13 | Objectives, tutorials, and game-specific triggers. |
| **NETWORK** | 98 | Cables, SFPs, network mapping, and switch state. |
| **PLAYER** | 16 | Player stats (Money, XP, Rep), movement, and inventory. |
| **RACK** | 11 | Rack mounting and position management. |
| **SERVER** | 24 | Server power, links, and customer assignments. |
| **SYSTEM** | 81 | Shop logic, game state, saving, and global managers. |
| **UI** | 25 | Menus, balance sheets, and canvas management. |

---

## CUSTOMER (18)
### CustomerBase
- `Il2Cpp.CustomerBase::AddAppPerformance(int, float)`
- `Il2Cpp.CustomerBase::AppText(int)`
- `Il2Cpp.CustomerBase::AreAllAppRequirementsMet()`
- `Il2Cpp.CustomerBase::Awake()`
- `Il2Cpp.CustomerBase::GetAppIDForIP(string)`
- `Il2Cpp.CustomerBase::GetEffectiveMoneySpeed()`
- `Il2Cpp.CustomerBase::GetServerTypeForIP(string)`
- `Il2Cpp.CustomerBase::GetSubnetsPerApp()`
- `Il2Cpp.CustomerBase::GetTotalAppSpeed()`
- `Il2Cpp.CustomerBase::GetVlanIdsPerApp()`
- `Il2Cpp.CustomerBase::IsIPPresent(string)`
- `Il2Cpp.CustomerBase::LoadData(CustomerBaseSaveData)`
- `Il2Cpp.CustomerBase::ResetAllAppSpeeds()`
- `Il2Cpp.CustomerBase::SetUpApp(int, int, CustomerBaseSaveData)`
- `Il2Cpp.CustomerBase::SetUpBase(CustomerItem, CustomerBaseSaveData)`
- `Il2Cpp.CustomerBase::Start()`
- `Il2Cpp.CustomerBase::UpdateCustomerServerCountAndSpeed(int, float)`
- `Il2Cpp.CustomerBase::UpdateSpeedOnCustomerBaseApp(int, float)`

## EMPLOYEE (23)
### HRSystem
- `Il2Cpp.HRSystem::ButtonCancelBuying()`
- `Il2Cpp.HRSystem::ButtonConfirmFireEmployee()`
- `Il2Cpp.HRSystem::ButtonConfirmHire()`
- `Il2Cpp.HRSystem::ButtonFireEmployee(int)`
- `Il2Cpp.HRSystem::ButtonHireEmployee(int)`
- `Il2Cpp.HRSystem::OnEnable()`

### Technician
- `Il2Cpp.Technician::AssignJob(RepairJob)`
- `Il2Cpp.Technician::Awake()`
- `Il2Cpp.Technician::RepairDevice()`
- `Il2Cpp.Technician::Start()`

### TechnicianManager
- `Il2Cpp.TechnicianManager::AddTechnician(Technician)`
- `Il2Cpp.TechnicianManager::FireTechnician(int)`
- `Il2Cpp.TechnicianManager::SendTechnician(NetworkSwitch, Server)`

## NETWORK (98)
### CableLink
- `Il2Cpp.CableLink::InsertSFP(float, int, SFPModule)`
- `Il2Cpp.CableLink::RemoveSFP()`
- `Il2Cpp.CableLink::SetConnectionSpeed(float)`

### CablePositions
- `Il2Cpp.CablePositions::CreateNewCable()`
- `Il2Cpp.CablePositions::RemoveLastPosition(int)`

### NetworkMap
- `Il2Cpp.NetworkMap::AddDevice(string, TypeOfLink, int)`
- `Il2Cpp.NetworkMap::Connect(string, string)`
- `Il2Cpp.NetworkMap::Disconnect(string, string)`
- `Il2Cpp.NetworkMap::RegisterServer(Server)`
- `Il2Cpp.NetworkMap::RegisterSwitch(NetworkSwitch)`

### NetworkSwitch
- `Il2Cpp.NetworkSwitch::PowerButton(bool)`
- `Il2Cpp.NetworkSwitch::SetVlanAllowed(int, int)`
- `Il2Cpp.NetworkSwitch::SwitchInsertedInRack(SwitchSaveData)`

## PLAYER (16)
### Player
- `Il2Cpp.Player::UpdateCoin(float, bool)`
- `Il2Cpp.Player::UpdateReputation(float)`
- `Il2Cpp.Player::UpdateXP(float)`

## RACK (11)
### Rack
- `Il2Cpp.Rack::MarkPositionAsUsed(int, int)`
- `Il2Cpp.Rack::MarkPositionAsUnused(int, int)`
- `Il2Cpp.Rack::ButtonUnmountRack()`

## SERVER (24)
### Server
- `Il2Cpp.Server::PowerButton(bool)`
- `Il2Cpp.Server::RegisterLink(CableLink)`
- `Il2Cpp.Server::ServerInsertedInRack(ServerSaveData)`
- `Il2Cpp.Server::SetIP(string)`
- `Il2Cpp.Server::UpdateCustomer(int)`

## SYSTEM (81)
### ComputerShop
- `Il2Cpp.ComputerShop::ButtonCheckOut()`
- `Il2Cpp.ComputerShop::UnlockFromSave(Dictionary<string, bool>)`

### MainGameManager
- `Il2Cpp.MainGameManager::ButtonCustomerChosen(int)`
- `Il2Cpp.MainGameManager::SetAutoSaveEnabled(bool)`
- `Il2Cpp.MainGameManager::ShowNetworkConfigCanvas(NetworkSwitch)`

## UI (25)
### BalanceSheet
- `Il2Cpp.BalanceSheet::FillInBalanceSheet()`
- `Il2Cpp.BalanceSheet::RegisterSalary(int)`

---
*Note: This catalog is a condensed reference. For detailed usage and payload schemas, refer to the individual domain documentation pages.*
