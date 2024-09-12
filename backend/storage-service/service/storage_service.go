package service

import "storage-service/database"

type StorageService interface {
	GetProduct()
}

type StorageServiceImpl struct {
	repo *database.StorageRepository
}

func NewStorageService(repos *database.StorageRepository) *StorageServiceImpl {
	return &StorageServiceImpl{
		repo: repos,
	}
}
