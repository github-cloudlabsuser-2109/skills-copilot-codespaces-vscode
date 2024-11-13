# Define the provider
provider "azurerm" {
  features {}
}

# Define the resource group
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West Europe"
}

# Define the storage account
resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  kind                     = "StorageV2"
}

# Define variables
variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
}