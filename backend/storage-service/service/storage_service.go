package service

import "storage-service/database"

type StorageService interface {
	GetProduct()
}

type StorageServiceImpl struct {
	repo database.StorageRepository
}

func NewStorageService(repos database.StorageRepository) StorageService {
	return &StorageServiceImpl{
		repo: repos,
	}
}

func (s *StorageServiceImpl) GetProduct() {

}
