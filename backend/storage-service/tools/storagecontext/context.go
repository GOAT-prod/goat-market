package storagecontext

import (
	"context"
	"storage-service/settings"

	"github.com/GOAT-prod/goatlogger"
)

type storageContext struct {
	ctx    context.Context
	logger goatlogger.Logger
}

func New() storageContext {
	logger := goatlogger.New(settings.GetAppName())

	return storageContext{
		ctx:    context.Background(),
		logger: logger,
	}
}

func (sc *storageContext) SetCtx(ctx context.Context) {
	sc.ctx = ctx
}

func (sc *storageContext) Ctx() context.Context {
	return sc.ctx
}

func (sc *storageContext) Log() goatlogger.Logger {
	return sc.logger
}
