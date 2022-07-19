export class ExpressKernelConfig implements Application.ExpressKernelConfig {
  port = env('PORT', '3000');
}
